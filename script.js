function shortcut(s1, s2) {
  if(s1===""||s2==="")
  {
	  return "";
  }
	else
  {
	  const arr1=s1.split("");
	  const arr2=s2.split("");

	  return arr1[0]+arr2[0];
  }
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
