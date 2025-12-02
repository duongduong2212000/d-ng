body {
    font-family: Arial;
    text-align: center;
    background: #ffe9dc;
}

.card-container {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
}

.card {
    width: 100px;
    height: 150px;
    background: url('https://i.imgur.com/kH7VQKQ.png'); /* mặt sau lá bài */
    background-size: cover;
    border-radius: 10px;
    cursor: pointer;
    transform: translateY(-200px);
    opacity: 0;
    transition: 0.6s;
    position: relative;
}

/* khi chia bài xong */
.card.dealt {
    transform: translateY(0);
    opacity: 1;
}

/* mặt trước lá bài */
.card .front {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
}

/* mặt sau */
.card .back {
    width: 100%;
    height: 100%;
    background-size: cover;
    border-radius: 10px;
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(0deg);
}

/* lật bài */
.card.flip .front {
    transform: rotateY(0deg);
}
.card.flip .back {
    transform: rotateY(180deg);
}

/* hiệu ứng bật nhảy */
.bounce {
    animation: bounce 0.6s ease;
}

@keyframes bounce {
    0%   { transform: scale(1); }
    30%  { transform: scale(1.2); }
    60%  { transform: scale(0.9); }
    100% { transform: scale(1); }
}
