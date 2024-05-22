import { useEffect, useState } from 'react'

function ShowImage() {
  const [APIData, setAPIData] = useState("");

  // Use the useEffect hook to fetch data form API
  useEffect(()=> {
    const FetchDogAPI =async () =>{

    try {
    const response =await fetch("https://dog.ceo/api/breeds/image/random");
    const responsedata= await response.json();
    setAPIData(responsedata.message);
    console.log(APIData); 
    }
    catch(error)
    {
      throw new Error('Error occured while connecting Dog API');
    }
  };

  FetchDogAPI();

  },[]);

  return (
    <>
      <div>
      <img src={APIData} alt="Dog Image" />
      </div>
    </>
  )
}
export default ShowImage
