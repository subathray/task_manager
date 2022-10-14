$(document).ready(function() {
    $("#backBtn").click(function() {
        location.href='/tasks';
    })

    $("#taskForm").submit(function(e){
        e.preventDefult();
        alert('Task form submitted')
    })
})