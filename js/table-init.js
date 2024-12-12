
$(document).ready(function () {

var sort_col;

if ($('#testing-nov2024-test-results').find("th:contains('IDF1')").length > 0)
{  sort_col = $('#testing-nov2024-test-results').find("th:contains('IDF1')")[0].cellIndex;
  $('#testing-nov2024-test-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#testing-nov2024-test-all-results').find("th:contains('IDF1')").length > 0)
{  sort_col = $('#testing-nov2024-test-all-results').find("th:contains('IDF1')")[0].cellIndex;
  $('#testing-nov2024-test-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#testing-nov2024-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#testing-nov2024-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#testing-nov2024-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
$('.dataTables_length').addClass('bs-select');
});