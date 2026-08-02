const inputs = ['courseNo', 'courseName', 'expName', 'studentName', 'rollNo'];

inputs.forEach(id => {
    document.getElementById(id).addEventListener('input', function(e) {
        const outputId = 'out' + id.charAt(0).toUpperCase() + id.slice(1);
        document.getElementById(outputId).innerText = e.target.value;
    });
});
// adding js file 