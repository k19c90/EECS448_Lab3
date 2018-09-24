function editBorderColor()
{
  let borderColor = document.getElementById("borderColor").value;
  if((borderColor == "red" || "Red") || (borderColor == "green" || "Green") || (borderColor == "blue" || "Blue"))
  {
    document.getElementById("edit").style.borderColor=borderColor;
  }
  else
  {
    alert("Border must be red, green, or blue");
  }
}

function editBackgroundColor()
{
  let backgroud = document.getElementById("backgroundColor").value;
  if((backgroud == "red" || "Red") || (backgroud == "green" || "Green") || (backgroud == "blue" || "Blue"))
  {
    document.getElementById("edit").style.backgroundColor=backgroud;
  }
  else
  {
    alert("Background must be red, green, or blue");
  }
}

function editBorderWidth()
{
  let borderWidth = document.getElementById("borderWidth").value;
  if(isNaN(borderWidth))
  {
    alert("That's not a number");
  }
  else
  {
    document.getElementById("edit").style.borderWidth=borderWidth+'px';
  }
}

function editAll()
{
    editBorderColor();
    editBackgroundColor();
    editBorderWidth();
}