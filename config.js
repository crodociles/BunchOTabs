//create localstorage if none exists
if(localStorage.getItem('addressList')==null)
{
  localStorage.setItem('addressList',"");
}

//get string from local storage
var inputArray = localStorage.getItem('addressList');

//creare array from string
inputArray = inputArray.split(",");
//create inputs
for (var i=0;i < inputArray.length;i++){
  if(i===inputArray.length-1)
  {
    $('#favourite-input-wrapper').append('<div class="input-wrapper"><div class="fave-num-text">'+(i+1)+'</div><input class="fave-input" id="fave-input-'+(i+1)+'" type="text" name="favourite-num-'+(i+1)+'"><div id="add-new-btn" title="Add New Item">+</div></div>');
  }else{
    $('#favourite-input-wrapper').append('<div class="input-wrapper"><div class="fave-num-text">'+(i+1)+'</div><input class="fave-input" id="fave-input-'+(i+1)+'" type="text" name="favourite-num-'+(i+1)+'"></div>');
  }
}
//populate inputs from array
for (i=1;i<10;i++){
  $('#fave-input-'+i).val(inputArray[i-1]);
}

//saving addresses
$('#save-faves').click(function(){
  var siteArray = [];
  for (i=1;i<10;i++){
    if ($('#fave-input-'+i).val()) {
      //if value push it to array
      siteArray.push($('#fave-input-'+i).val());
    }
    //create single string and save to local storage
    siteArray.join(",");
    
    localStorage.setItem('addressList',siteArray);
  }
  if(localStorage.getItem('addressList')==siteArray){
    $('#saved-text').text('Saved.');
  }else{
    $('#saved-text').text('Could not save. Please try again.');
  }
})

//create new input
$(document).on('click','#add-new-btn',function(){
  $(this).remove();
  var last = $('.fave-num-text').last().text();
  console.log($('.fave-num-text').last().text());
  console.log(last.length>2);
  if(last.length>1){
    last = parseInt(last.substring(0,2))
    console.log(last);
  }else{
    last = parseInt(last[0]);
    console.log("less");
  }
    $('#favourite-input-wrapper').append('<div class="input-wrapper"><div class="fave-num-text">'+(last+1)+'</div><input class="fave-input" id="fave-input-'+(last+1)+'" type="text" name="favourite-num-'+(last+1)+'"><div id="add-new-btn" title="Add New Item">+</div></div>');

})
