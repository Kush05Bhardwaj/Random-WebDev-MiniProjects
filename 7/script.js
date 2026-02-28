function calculateResult() {
      const name = document.getElementById('name').value;
      const marks = parseFloat(document.getElementById('marks').value);
      const attendance = parseFloat(document.getElementById('attendance').value);
      const result = document.getElementById('result');

      if (!name || isNaN(marks) || isNaN(attendance)) {
        alert('Please fill all fields correctly!');
        return;
      }

      if (marks < 0 || marks > 100 || attendance < 0 || attendance > 100) {
        alert('Please enter valid marks and attendance (0-100)!');
        return;
      }

      let grade = '';
      if (marks >= 90) grade = 'A+';
      else if (marks >= 80) grade = 'A';
      else if (marks >= 70) grade = 'B';
      else if (marks >= 60) grade = 'C';
      else if (marks >= 50) grade = 'D';
      else grade = 'F';

      const status = (marks >= 40 && attendance >= 75) ? 'PASS' : 'FAIL';

      const scholarship = (marks >= 85 && attendance >= 90) ? 
        '✓ Eligible for Scholarship' : '✗ Not Eligible for Scholarship';

      let colorClass = '';
      if (marks >= 85 && attendance >= 90) colorClass = 'excellent';
      else if (marks >= 70 && attendance >= 80) colorClass = 'good';
      else if (marks >= 50 && attendance >= 75) colorClass = 'average';
      else colorClass = 'poor';

        result.innerHTML = `Name: ${name}<br>
                            Marks: ${marks}<br>
                            Attendance: ${attendance}%<br>
                            Grade: ${grade}<br>
                            Status: ${status}<br>
                            ${scholarship}
        `;
    }
