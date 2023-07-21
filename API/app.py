# 1. Install uvicorn and fastapi
# pip install fastapi uvicorn

# 2. Library Imports
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle

# 3. Create the app object
app = FastAPI()

# 4. Configure CORS to access API from anywhere
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 5. load the model
svc = pickle.load(open("svc.pkl", "rb"))

# 6. Index Route – API for Hello World, opens automatically on http://127.0.0.1:8000
@app.get('/')
def index():
    return {'message': 'Hello World'}

# 7. Run the API with uvicorn
if __name__ == '__main__':
    uvicorn.run(app, port=80, host='0.0.0.0')

# 8a. Using GET Method
@app.get("/predictInsurance")
def getPredictInsurance(Age: int,EmploymentType: bool, GraduateOrNot: bool, AnnualIncome: int, FamilyMembers: int, ChronicDiseases: bool, FrequentFlyer: bool, EverTravelledAbroad: bool):

    prediction = svc.predict([[Age,EmploymentType,GraduateOrNot,AnnualIncome,FamilyMembers,ChronicDiseases,FrequentFlyer,EverTravelledAbroad]])

    return {
        'TravelInsurance': str(prediction[0])
    }


# 9. Run the API with uvicorn with Reload Option - Auto Run after edit source code
# uvicorn app:app --reload

# 10. Test API from Web Browser
# http://127.0.0.1:8000/predictPrice?Area=1400&BedRooms=3&BathRooms=3
#http://127.0.0.1/predictInsurance?Age=30&EmploymentType=true&GraduateOrNot=true&AnnualIncome=1400000&FamilyMembers=3&ChronicDiseases=true&FrequentFlyer=true&EverTravelledAbroad=true


