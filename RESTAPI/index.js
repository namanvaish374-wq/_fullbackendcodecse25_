import express from "express";
const app= express();
app.use(express.json());

let users=[
    {
    id:1,
    name:"A",
    email:"a@abes.ac.in"
},
{
    id:2,
    name:"B",
    email:"b@abes.ac.in"

}];
app.get("/users",(req,res)=>{
    res.json(users);

});

app.post("/users",(req,res)=>
{
    const user=
    {
       id:users.length+1,
       name: req.body.name,
       email:req.body.email
};


users.push(user);
res.json(user);
}
);

app.listen(8000,()=>
{
    console.log("Server is running on http://localhost:8000/users");
})

//create RESTAPI for 100 products with id,name price, description ,
//implement get, post, put, and delete requests for products.
