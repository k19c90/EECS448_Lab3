function editBorderColor()
{
    let borderColor1 = document.getElementById("borderColor1").value;
    let borderColor2 = document.getElementById("borderColor2").value;
    let borderColor3 = document.getElementById("borderColor3").value;
    document.getElementById("border").style.borderColor = "rgb(" + borderColor1 + "," + borderColor2 + "," + borderColor3")"
}

function editBackgroundColor()
{
    let background1 = document.getElementById("backgroundColor1").value;
    let background2 = document.getElementById("backgroundColor2").value;
    let background3 = document.getElementById("backgroundColor3").value;
    document.getElementById("border").style.backgroundColor = "rgb(" + background1 + "," + background2 + "," + background3")"
}

function editBorderWidth()
{
    let borderWidth = document.getElementById("borderWidth").value;
    document.getElementById("border").style.borderWidth = borderWidth;
}

function editAll()
{
    editBorderColor();
    editBackgroundColor();
    editBorderWidth();
}