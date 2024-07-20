const fs= require("fs")
const addPerson=(id,fname,lname,city,age) =>{
    //1//
  const allData= loadInfo()
  const duplicatedData= allData.filter((obj)=>{
    return obj.id ===id
  })
  if(duplicatedData.length ==0)
    {
      //2//
      allData.push({
        id: id,
        fname: fname,
        lname: lname,
        city: city,
        age: age
   })
   //3//
      savealldata(allData)
  } else {
    console.log("ERROR DUPLICATED DATA")
  }

}

/****************************************** */
// 1- loadData
const loadInfo= ()=>{
    try{
        const datajson= fs.readFileSync("data10.json").toString()
        return JSON.parse(datajson)
    }
    catch{
        return []
    }
  
}

/****************************************** */
// 3- SaveData
const savealldata=(allData)=>{
 const savealldatajson = JSON.stringify(allData)
 fs.writeFileSync("data10.json", savealldatajson)
}
/****************************************** */
//Delete Data

const deleteData=(id)=>{
    const allData= loadInfo()
    const dataTokeep= allData.filter((obj)=>{
        return obj.id !== id
    })
    // console.log(dataTokeep)
    // console.log("you have successfuly deleted  item")

    savealldata(dataTokeep)

}
/****************************************** */
//read to data (id)

const readData=(id)=>{
    const allData= loadInfo()
    const itemNeeded= allData.find((obj)=>{
        return obj.id == id
    })
    // console.log(itemNeeded)
    if(itemNeeded){
        console.log(itemNeeded)
    }
    else{
        console.log("ID NEEDED NOT FOUND")
    }
}
/****************************************** */
//list
 const listData=()=>{
    const allData=loadInfo()
    allData.forEach((obj) => {
        console.log(obj.fname,obj.city)
    });
    
 }
/****************************************** */
module.exports={
    addPerson,
    deleteData,
    readData,
    listData
}
