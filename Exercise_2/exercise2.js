let images = ["dog.jpg", "cat.jpg", "bunny.jpg", "squirrel.jpg", "chipmunk.jpg"];
let counter = 0;

function previous()
{
  if(counter == 0)
  {
    counter = (images.length)-1;
  }
  else
  {
    counter--;
  }
  slides();
}
function next()
{
  if(counter == (images.length)-1)
  {
    counter = 0;
  }
  else
  {
    counter++;
  }
  slides();
}

function slides(){
  let change = document.getElementById("current");
  change.src = images[counter];
}