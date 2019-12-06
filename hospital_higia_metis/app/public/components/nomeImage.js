var $input    = document.getElementById('pwd'),
    $fileName = document.getElementById('file-name');

$input.addEventListener('change', function(){
  $fileName.textContent = this.value;
});
