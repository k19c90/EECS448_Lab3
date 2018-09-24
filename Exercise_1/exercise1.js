function validate()
{
    let field1 = document.getElementById("Field1").value
    let field2 = document.getElementById("Field2").value
    
    if (field1 != field2)
    {
        alert("Passwords do not match.")
    }
    else if (field1.length < 8 || field2.length < 8)
    {
        alert("Password is not long enough.")
    }
    else{
        alert("Good Password")
    }
}