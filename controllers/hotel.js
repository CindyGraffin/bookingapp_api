import Hotel from '../models/Hotel.js'

// we use async because we need to connect to our db, create a new collection and a new document and it will take time
export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        next(err)
    }
}

export const getHotels = async (req, res, next) => {
    const {min, max, ...others} = req.query
    try {
        const hotels = await Hotel.find({
            ...others, 
            cheapestPrice: {$gt: min | 1, $lt: max || 999},
        }).limit(req.query.limit)
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
}

export const countByCity = async (req, res, next) => {
    const cities = await req.query.cities.split(',')
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city: city})
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}

export const countByType = async (req, res, next) => {
    // const types = await req.query.types.split(',')
    try {
        // const list = await Promise.all(types.map(type => {
        //     return Hotel.countDocuments({type: type})
        // }))
        // res.status(200).json(list)
        const hotelCount = await Hotel.countDocuments({type: 'hotel'});
        const appartmentCount = await Hotel.countDocuments({type: 'appartment'});
        const resortCount = await Hotel.countDocuments({type: 'resort'});
        const villaCount = await Hotel.countDocuments({type: 'villa'});
        const cabaneCount = await Hotel.countDocuments({type: 'cabane'});
        res.status(200).json([
            {type: "hotel", count: hotelCount},
            {type: "appartment", count: appartmentCount},
            {type: "resort", count: resortCount},
            {type: "villa", count: villaCount},
            {type: "cabane", count: cabaneCount}
        ])
    } catch (err) {
        next(err)
    }
}


export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel);
    } catch (err) {
        next(err);
    }
}

export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedHotel)
    } catch (err) {
        next(err)
    }
}

export const deleteHotel = async (req, res, next) => {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedHotel)
    } catch (err) {
        next(err)
    }
}
