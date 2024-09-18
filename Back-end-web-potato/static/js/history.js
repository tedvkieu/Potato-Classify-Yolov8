var totalShrimp = document
    .getElementById('data-container')
    .getAttribute('data-total');
var totalBigShrimp = document
    .getElementById('data-container')
    .getAttribute('data-big');
var totalMediumShrimp = document
    .getElementById('data-container')
    .getAttribute('data-medium');
var totalSmallShrimp = document
    .getElementById('data-container')
    .getAttribute('data-small');

// -------------------
var ratioBigShrimp = totalBigShrimp / totalShrimp;
var ratioMediumShrimp = totalMediumShrimp / totalShrimp;
var ratioSmallShrimp = totalSmallShrimp / totalShrimp;
// Load google charts
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Total shrimp'],
        ['Big Shrimp', ratioBigShrimp],
        ['Medium Shrimp', ratioMediumShrimp],
        ['Small Shrimp', ratioSmallShrimp],
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {
        title: 'Pie chart of total shrimps',
        titleTextStyle: {
            fontSize: 30,
        },
        height: 600,
    };
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(
        document.getElementById('piechart')
    );
    chart.draw(data, options);
}
// xu ly xo anh
// Lấy các phần tử cần thiết
var modal
var span

function openModal(id,imageSrc, rs, total, time) {
    modal = document.getElementById(id);
    span=document.getElementById('close'+id);
    var modalImg = document.getElementById('img01');
    var res = document.getElementById('results_text');
    var tot = document.getElementById('total_text');
    var timeText = document.getElementById('time_text');

    modal.style.display = 'block';
    modalImg.src = '/static/yolov8/' + imageSrc;
    res.textContent = ' ' + rs;
    tot.textContent = ' ' + total;
    timeText.textContent = ' ' + time;
}

function closeModel () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
/*----------------------Xử lý delete nhiều data----------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const selectButton = document.getElementById('select_del');
    const deleteButton = document.getElementById('del_del');
    const checkboxes = document.querySelectorAll('.recordCheckbox');

    let deleteButtonVisible = false;

    selectButton.addEventListener('click', () => {
        // Nếu nút "Delete" chưa hiển thị, thì hiển thị nó
        if (!deleteButtonVisible) {
            deleteButton.style.display = 'block';
            checkboxes.forEach((checkbox) => {
                checkbox.style.visibility = 'visible';
            });
            deleteButtonVisible = true;
        } else {
            // Ngược lại, ẩn nút "Delete"
            deleteButton.style.display = 'none';
            checkboxes.forEach((checkbox) => {
                checkbox.style.visibility = 'hidden';
            });
            deleteButtonVisible = false;
        }
    });

    const selectButtons = document.querySelectorAll('.selectButton');

    selectButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const checkbox =
                this.parentElement.querySelector('.recordCheckbox');
            checkbox.style.visibility =
                checkbox.style.visibility === 'hidden' ? 'visible' : 'hidden';
        });
    });
});

function getSelectedRecords() {
    const checkboxes = document.querySelectorAll('.recordCheckbox:checked');
    const selectedRecords = [];

    checkboxes.forEach((checkbox) => {
        selectedRecords.push(checkbox.value);
    });

    return selectedRecords;
}

function deleteSelected() {
    const selectedRecords = getSelectedRecords();
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false,
    });

    swalWithBootstrapButtons
        .fire({
            title: `Delete all selected! Are you sure?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
        })
        .then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: '/delete_selected_records',
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(selectedRecords),
                    success: function (data) {
                        if (data.success) {
                            swalWithBootstrapButtons
                                .fire({
                                    title: 'Deleted!',
                                    text: 'All files you selected have been deleted!',
                                    icon: 'success',
                                })
                                .then(() => {
                                    location.reload();
                                });
                        } else {
                            swalWithBootstrapButtons.fire({
                                title: 'Error',
                                text: data.error || 'An error occurred.',
                                icon: 'error',
                            });
                        }
                    },
                    error: function (xhr, status, error) {
                        console.error('Error:', error);
                    },
                });
            } else {
            }
        });
}
//----------------------------------------------------------------------------------------------
// xu ly phan delete mot record

function deleteData(id) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false,
    });
    swalWithBootstrapButtons
        .fire({
            title: `Delete saved ${id}! Are you sure?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
        })
        .then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: '/delete_data',
                    type: 'POST',
                    data: { id: id },
                    success: function (response) {
                        swalWithBootstrapButtons
                            .fire({
                                title: 'Deleted!',
                                text: 'Your file has been deleted.',
                                icon: 'success',
                            })
                            .then(() => {
                                location.reload();
                            });
                    },
                    error: function (xhr, status, error) {
                        swalWithBootstrapButtons.fire({
                            title: 'Error',
                            text: 'An error occurred while deleting the file.',
                            icon: 'error',
                        });
                    },
                });
            } else {
            }
        });
}
/*--------------------- phan trang ------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 5;
    let currentPage = 1;
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    const historyDetails = document.querySelectorAll('.history-details');
    content=''
    if(historyDetails.length>5){
    console.log("no")
    content+='<button id="prevPage">&laquo; Previous</button>'
    for(var page=0; page<Math.ceil(historyDetails.length / itemsPerPage); page++){
    content+='<button class="pageNumber">'+(page+1)+'</button>'
    }
    content+='<button id="nextPage">Next &raquo;</button>'
    }else{
    console.log("ok")
   content ='<button class="pageNumber">1</button>'
    }
    document.getElementById('pagination').innerHTML=content
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');
    const pageNumberButtons = document.querySelectorAll('.pageNumber');

    function displayCurrentPage() {
        console.log(historyDetails)
        startIndex=(currentPage - 1) * itemsPerPage;
        endIndex = startIndex + itemsPerPage
        historyDetails.forEach(function (detail, index) {
            if (index >= startIndex && index < endIndex) {
                detail.style.display = 'block';
            } else {
            detail.style.display = 'none';
            console.log(detail, '--- ', index,startIndex,endIndex);
        }
    })
    }

if(prevPageButton) {
prevPageButton.addEventListener('click', function (event) {
        event.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            displayCurrentPage();
            updatePaginationButtons();
        }
    });
    }

    if(prevPageButton){
    nextPageButton.addEventListener('click', function (event) {
        event.preventDefault();
        const totalPages = Math.ceil(historyDetails.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayCurrentPage();
            updatePaginationButtons();
        }
    });
}
    pageNumberButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            currentPage = parseInt(this.textContent);
            console.log(currentPage);
            displayCurrentPage();
            updatePaginationButtons();
        });
    });

    function updatePaginationButtons() {
        pageNumberButtons.forEach(function (button) {
            button.classList.remove('active');
            if (parseInt(button.textContent) === currentPage) {
                button.classList.add('active');
            }
        });
    }

    displayCurrentPage();
    updatePaginationButtons();
});
