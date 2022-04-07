//Get a dog photo from the dog.ceo api and place the photo in the DOM 

class Dog{
 // make http request
 async get(url){
  const response = await fetch(url)
  // console.log(response);
  const responseData = await response.json()
  return responseData
 

 }
}