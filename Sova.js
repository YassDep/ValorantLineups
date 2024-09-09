document.addEventListener('DOMContentLoaded', function () {
    const videoContainer = document.getElementById('videoContainer');
    const optionList = document.getElementById('option-list');

    const videos = [
        { src: 'sova1.mp4', poster: 'poster1.jpg', title: 'Video 1', tags: ['attacking'] },
        { src: 'sova2.mp4', poster: 'poster2.jpg', title: 'Video 2', tags: ['attacking'] },
        { src: 'sova3.mp4', poster: 'poster3.jpg', title: 'Video 3', tags: ['attacking'] },
        { src: 'sova4.mp4', poster: 'poster4.jpg', title: 'Video 4', tags: ['attacking'] },
        { src: 'sova5.mp4', poster: 'poster5.jpg', title: 'Video 5', tags: ['attacking'] },
        { src: 'sova6.mp4', poster: 'poster6.jpg', title: 'Video 6', tags: ['defending'] }, 
        { src: 'sova7.mp4', poster: 'poster7.jpg', title: 'Video 7', tags: ['defending'] }, 
        { src: 'sova8.mp4', poster: 'poster8.jpg', title: 'Video 8', tags: ['defending'] },
        { src: 'sova9.mp4', poster: 'poster9.jpg', title: 'Video 9', tags: ['defending'] },
        { src: 'sova10.mp4', poster: 'poster10.jpg', title: 'Video 10', tags: ['defending'] }, 

        // Add more videos as needed, following the { src, poster, title, tags } format
    ];

    function createVideoElement(videoData) {
        const videoWrapper = document.createElement('div');
        videoWrapper.classList.add('video');

        const video = document.createElement('video');
        video.src = videoData.src;
        video.classList.add('preview');
        video.preload = 'metadata';
        video.muted = true;
        video.loop = true;

        const playButton = document.createElement('span');
        playButton.classList.add('play-button');
        playButton.textContent = '\u25B6'; // Unicode for play icon

        const title = document.createElement('span');
        title.classList.add('video-title');
        title.textContent = videoData.title;

        videoWrapper.appendChild(video);
        videoWrapper.appendChild(playButton);
        videoWrapper.appendChild(title);

        videoContainer.appendChild(videoWrapper);
        videoWrapper.dataset.tags = JSON.stringify(videoData.tags); // Store tags as a data attribute
    }

    function filterVideos(filter) {
        const videoElements = document.querySelectorAll('.video');
        videoElements.forEach(videoElement => {
            if (filter === 'all') {
                videoElement.style.display = 'block';
            } else {
                const tags = JSON.parse(videoElement.dataset.tags);
                videoElement.style.display = tags.includes(filter) ? 'block' : 'none';
            }
        });
    }

    videos.forEach(videoData => createVideoElement(videoData));

    optionList.addEventListener('click', function (event) {
        const filter = event.target.dataset.filter;
        if (filter) {
            filterVideos(filter);
        }
    });

    filterVideos('all'); // Show all videos initially

    // Video functionality (same as before)
    document.querySelectorAll('.video').forEach((videoWrapper, index) => {
        const previewVideo = videoWrapper.querySelector('.preview');

        videoWrapper.addEventListener('mouseenter', () => {
            previewVideo.play();
        });

        videoWrapper.addEventListener('mouseleave', () => {
            previewVideo.pause();
            previewVideo.currentTime = 0;
        });

        videoWrapper.addEventListener('click', () => {
            const src = previewVideo.getAttribute('src');
            const popupVideo = document.querySelector('.popup video');
            popupVideo.setAttribute('src', src);
            document.querySelector('.popup').style.display = 'block';
        });
    });

    document.querySelector('.popup').addEventListener('click', () => {
        document.querySelector('.popup').style.display = 'none';
    });
});
