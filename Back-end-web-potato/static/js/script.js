let model;
let labels = ['BigShrimp', 'MediumShrimp', 'SmallShrimp'];

$(document).ready(function () {
    //if (!$('#uploadFile').val() ) {
    //        $('#uploadImage').submit(function (e) {
    //                e.preventDefault();
    //                })
    //}
    //    $('#uploadFile').change(function (event) {
    //        $('#inferenceJson').empty().append('');
    //
    //if (event.target.files.length>0) {
    //            $('#uploadImage').submit(function (e) {
    //
    //            console.log("ook",event.target.files.length>0)
    //            if (event.target.files.length>0) {
    //                e.preventDefault();
    //                handleFiles(event.target.files);
    //                }
    //            });
    //
    // }
    //    });
    $('#uploadImage').submit(function (e) {
        e.preventDefault(); // Prevent form submission by default
        var files = $('#uploadFile')[0].files; // Get selected files
        if (files.length > 0) {
            handleFiles(files); // If files are selected, handle them
        } else {
            alert('Please select a file.'); // If no file is selected, alert the user
        }
    });
});

var myButton = $('#btn-run');

// Thêm sự kiện click vào button
myButton.on('play', function () {
    alert('Bạn đã click vào nút!');
    move();
});

var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById('myBar');
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width + '%';
            }
        }
    }
}
function downloadImage() {
    var imageURL = document.getElementById('imageURL').value;
    if (imageURL) {
        $('#displayedImage').hide();
        $('#targetLayer').hide();
        document.getElementById('process_img').style.backgroundColor =
            '#676767';
        document.getElementById('loader').style.display = 'inline';

        document.getElementById('inferenceJson').innerHTML = '';
        fetch('/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: imageURL }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    document.getElementById(
                        'process_img'
                    ).style.backgroundColor = 'transparent';
                    document.getElementById('loader').style.display = 'none';
                    document.getElementById('targetLayer').style.display =
                        'block';
                    document.getElementById('targetLayer').innerHTML =
                        data.htmlresponse;
                    document.getElementById(
                        'inferenceJson'
                    ).innerHTML = `<pre class='jsonOutput'>${JSON.stringify(
                        { Image1: data.Info },
                        null,
                        2
                    )}</pre>`;
                } else {
                    alert('Error downloading image. Please check the URL.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An unexpected error occurred.');
            });
    } else {
        alert('Please paste a link.');
    }
}

function dropHandler(event) {
    event.preventDefault();
    document.getElementById('drop-area').style.border = '2px dashed #ccc';
    const files = event.dataTransfer.files;
    handleFiles(files);
}
// Drag over handler
function dragOverHandler(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    document.getElementById('drop-area').style.border = '2px dashed #007bff';
}

// Handle files
function handleFiles(files) {
    //  const dropArea = document.getElementById("drop-area");
    //  const output = [];
    if (files) {
        let formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            formData.append('uploadFile[]', files[i]);
        }
        console.log(formData);
        if (formData) {
            $('#displayedImage').hide();
            $('#targetLayer').hide();

            document.getElementById('process_img').style.backgroundColor =
                '#676767';
            document.getElementById('loader').style.display = 'inline';

            fetch('/classify', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        formData = new FormData();
                        document.getElementById('uploadFile').value = '';
                        document.getElementById(
                            'displayedImage'
                        ).style.display = 'none';
                        document.getElementById('targetLayer').style.display =
                            'block';

                        document.getElementById(
                            'process_img'
                        ).style.backgroundColor = 'transparent';
                        document.getElementById('loader').style.display =
                            'none';
                        if (data.video) {
                            $('#videoRef').attr('src', data.file);
                            $('#videoRef').on('play', function () {
                                console.log(
                                    $('#videoRef'),
                                    model,
                                    $('#canvasRef')
                                );
                                detectVideo(
                                    document.getElementById('videoRef'),
                                    model,
                                    document.getElementById('canvasRef')
                                );
                            });
                        } else {
                            document.getElementById('targetLayer').innerHTML =
                                data.htmlresponse;
                            var InfoOfResult = data.Info.map(
                                (val, index) =>
                                    "<pre class='jsonOutput'>" +
                                    JSON.stringify(
                                        { ['Image' + (index + 1)]: val },
                                        null,
                                        2
                                    ) +
                                    '</pre>'
                            );
                            console.log(InfoOfResult);
                            document.getElementById('inferenceJson').innerHTML =
                                InfoOfResult;
                        }
                    } else {
                        alert('Error downloading image. Please check the URL.');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('An unexpected error occurred.');
                });
        }
    }
}

function toggleWebcam() {
    console.log('Toggle Webcam Clicked');
    document.getElementById('displayedImage').style.display = 'none';
    document.getElementById('targetLayer').style.display = 'block';
    //if($("#webcam").show()){
    //$("#webcam").src = "{{ url_for('video_feed') }}"
    //}
    var isWebcamVisible = $('#webcam').is(':visible');
    console.log('Webcam is visible:', isWebcamVisible);
    if (isWebcamVisible) {
        $('#webcam').attr('src', '');
    } else {
        $('#webcam').attr('src', '/video_feed/camera');

        $('#webcam').attr(
            'src',
            '/video_feed/https://www.facebook.com/100011446841179/videos/pcb.941243397229645/3068464763289472'
        );
    }
    // Sử dụng jQuery để thay đổi thuộc tính display của video từ webcam
    $('#webcam').toggle();
}

function toggleHiddenDiv() {
    var hiddenDiv = document.getElementById('hiddenDiv');
    if (hiddenDiv.style.display === 'none' || hiddenDiv.style.display === '') {
        hiddenDiv.style.display = 'block';
    } else {
        hiddenDiv.style.display = 'none';
    }
}
//// Xử lý sự kiện khi click vào hộp người dùng
//document.getElementById('userBox').addEventListener('click', function () {
//    var dropdownContent = document.getElementById('dropdownContent');
//    if (dropdownContent.style.display === 'block') {
//        dropdownContent.style.display = 'none';
//    } else {
//        dropdownContent.style.display = 'block';
//    }
//});

// Đóng hộp thả xuống khi click ra ngoài
window.onclick = function (event) {
    if (!event.target.matches('.user-box')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
};

/*-------------------------------------------*/
// Xử lý sự kiện khi click vào hộp người dùng
//document.getElementById('userBox').addEventListener('click', function () {
//    var dropdownContent = document.getElementById('dropdownContent');
//    if (dropdownContent.style.display === 'none') {
//        console.log('noit ok');
//        dropdownContent.style.display = 'none';
//    } else {
//        console.log('ok');
//        dropdownContent.style.display = 'block';
//    }
//});

// Đóng hộp thả xuống khi click ra ngoài
window.onclick = function (event) {
    if (!event.target.matches('.user-box')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
};

function loadModel() {
    tf.setBackend('webgpu').then(async () => {
        model = await tf.loadGraphModel('/static/models/model.json');

        const dummyInput = tf.ones(model.inputs[0].shape);
        const warmupResults = model.execute(dummyInput);
        tf.dispose([warmupResults, dummyInput]);
        $('#canvasRef').attr('width', model.inputs[0].shape[1]);
        $('#canvasRef').attr('height', model.inputs[0].shape[2]);
    });
}

loadModel();

const preprocess = (source, modelWidth, modelHeight) => {
    let xRatio, yRatio; // ratios for boxes
    const input = tf.tidy(() => {
        const img = tf.browser.fromPixels(source);

        // padding image to square => [n, m] to [n, n], n > m
        const [h, w] = img.shape.slice(0, 2); // get source width and height
        const maxSize = Math.max(w, h); // get max size
        const imgPadded = img.pad([
            [0, maxSize - h], // padding y [bottom only]
            [0, maxSize - w], // padding x [right only]
            [0, 0],
        ]);

        xRatio = maxSize / w; // update xRatio
        yRatio = maxSize / h; // update yRatio

        return tf.image
            .resizeBilinear(imgPadded, [modelWidth, modelHeight])
            .toFloat() // resize frame
            .div(255.0) // normalize
            .expandDims(0); // add batch
    });

    return [input, xRatio, yRatio];
};

const detect = async (source, model, canvasRef, callback = () => {}) => {
    const [modelWidth, modelHeight] = model.inputs[0].shape.slice(1, 3); // get model width and height

    tf.engine().startScope(); // start scoping tf engine
    const [input, xRatio, yRatio] = preprocess(source, modelWidth, modelHeight); // preprocess image

    const res = model.execute(input); // inference model
    const transRes = res.transpose([0, 2, 1]); // transpose result [b, det, n] => [b, n, det]
    const boxes = tf.tidy(() => {
        const w = transRes.slice([0, 0, 2], [-1, -1, 1]); // get width
        const h = transRes.slice([0, 0, 3], [-1, -1, 1]); // get height
        const x1 = tf.sub(transRes.slice([0, 0, 0], [-1, -1, 1]), tf.div(w, 2)); // x1
        const y1 = tf.sub(transRes.slice([0, 0, 1], [-1, -1, 1]), tf.div(h, 2)); // y1
        return tf
            .concat(
                [
                    y1,
                    x1,
                    tf.add(y1, h), //y2
                    tf.add(x1, w), //x2
                ],
                2
            )
            .squeeze();
    }); // process boxes [y1, x1, y2, x2]

    const [scores, classes] = tf.tidy(() => {
        // class scores
        const rawScores = transRes.slice([0, 0, 4], [-1, -1, 3]).squeeze(0); // #6 only squeeze axis 0 to handle only 1 class models
        return [rawScores.max(1), rawScores.argMax(1)];
    }); // get max scores and classes index
    const nms = await tf.image.nonMaxSuppressionAsync(
        boxes,
        scores,
        500,
        0.45,
        0.4
    ); // NMS to filter boxes

    const boxes_data = boxes.gather(nms, 0).dataSync(); // indexing boxes by nms index
    const scores_data = scores.gather(nms, 0).dataSync(); // indexing scores by nms index
    const classes_data = classes.gather(nms, 0).dataSync(); // indexing classes by nms index
    renderBoxes(canvasRef, boxes_data, scores_data, classes_data, [
        xRatio,
        yRatio,
    ]); // render boxes

    tf.dispose([res, transRes, boxes, scores, classes, nms]); // clear memory

    callback(classes_data);

    tf.engine().endScope(); // end of scoping
};
const detectVideo = (vidSource, model, canvasRef) => {
    const detectFrame = async () => {
        if (vidSource.videoWidth === 0 && vidSource.srcObject === null) {
            console.log('vo');
            const ctx = canvasRef.getContext('2d');
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // clean canvas
            return; // handle if source is closed
        }
        detect(vidSource, model, canvasRef, () => {
            requestAnimationFrame(detectFrame); // get another frame
        });
    };

    detectFrame(); // initialize to detect every frame
};

class Colors {
    constructor() {
        this.palette = ['red', 'blue', 'orange'];
        this.n = this.palette.length;
    }

    get = (i) => this.palette[Math.floor(i) % this.n];

    static hexToRgba = (hex, alpha) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? `rgba(${[
                  parseInt(result[1], 16),
                  parseInt(result[2], 16),
                  parseInt(result[3], 16),
              ].join(', ')}, ${alpha})`
            : null;
    };
}
const renderBoxes = (
    canvasRef,
    boxes_data,
    scores_data,
    classes_data,
    ratios
) => {
    const ctx = canvasRef.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // clean canvas

    const colors = new Colors();
    // font configs
    const font = `${Math.max(
        Math.round(Math.max(ctx.canvas.width, ctx.canvas.height) / 40),
        10
    )}px Arial`;
    ctx.font = font;
    ctx.textBaseline = 'top';

    for (let i = 0; i < scores_data.length; ++i) {
        // filter based on class threshold
        const klass = labels[classes_data[i]];
        const color = colors.get(classes_data[i]);
        const score = (scores_data[i] * 100).toFixed(1);
        let [y1, x1, y2, x2] = boxes_data.slice(i * 4, (i + 1) * 4);
        x1 *= ratios[0];
        x2 *= ratios[0];
        y1 *= ratios[1];
        y2 *= ratios[1];
        const width = x2 - x1;
        const height = y2 - y1;

        // vẽ màu trong hộp box.
        // ctx.fillStyle = Colors.hexToRgba(color, 0.2);
        // ctx.fillRect(x1, y1, width, height);

        // draw border box.
        ctx.strokeStyle = color;
        ctx.lineWidth = Math.max(
            Math.min(ctx.canvas.width, ctx.canvas.height) / 200,
            2.5
        );
        ctx.strokeRect(x1, y1, width, height);

        // Draw the label background.
        ctx.fillStyle = color;
        const textWidth = ctx.measureText(
            klass + ' ' + Math.round(score) + '%'
        ).width;
        const textHeight = parseInt(font, 7); // base 7
        const yText = y1 - (textHeight + ctx.lineWidth);
        ctx.fillRect(
            x1 - 1,
            yText < 0 ? 0 : yText, // handle overflow label box
            textWidth + ctx.lineWidth,
            textHeight + ctx.lineWidth
        );

        // Draw labels
        ctx.fillStyle = 'black';
        ctx.fillText(
            klass + ' ' + Math.round(score) + '%',
            x1 - 1,
            yText < 0 ? 0 : yText
        );
    }
};
