const VideoSchema = require('../models/videoModel');

exports.addVideo = async (req, res) => {

    const { title, description } = req.body;

    const videoPath = req.file.path;
    console.log(title, description);
    console.log(req.file);

    const video = new VideoSchema({
        title,
        description,
        filename: req.file.filename,
        videoUrl: videoPath
    })

    try {
        await video.save();
        res.status(200).json({
            message: "Video uploaded...",
            video
        })
    } catch (error) {

        res.status(400).json({
            message: "Failed to upload",
            error
        })
    }
}


exports.getAllVideos = async (req, res) => {

    try {
        const videos = await VideoSchema.find({})
        res.status(200).json({
            videos
        })
    } catch (error) {
        res.status(400).json({
            message: "Failed to get videos",
            error
        })
    }
}