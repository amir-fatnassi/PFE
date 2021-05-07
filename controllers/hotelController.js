const Hotel = require('./../models/hotelModel');

exports.createHotel = async(req, res) => {
    try {
        const newHotel = await Hotel.create(req.body);

        res.status(200).json({
            status: 'success',
            data: {
                hotel: newHotel
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
    
}


exports.getAllHotels = async(req, res) => {
    try {
        const hotels = await Hotel.find()

        res.status(200).json({
            status: 'success',
            dataSize: hotels.length,
            data: {
                hotels
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }

}

exports.getHotel = async(req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                hotel
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error 
        })
    }

}

exports.updatHotel = async(req, res) => {
    try {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { 
            new: true,
            runValidators:true
        });

        res.status(200).json({
            status: 'success',
            data: { 
                hotel
            }
        })        
    } catch (error) { 
        res.status(400).json({
            status: 'fail',
            message: error  
        })
    }
}

exports.deleteHotel = async(req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'success',
            message:'deleted'
        })        
    } catch (error) { 
        res.status(400).json({
            status: 'fail',
            message: error  
        })
    }
}