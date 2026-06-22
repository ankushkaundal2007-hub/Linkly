import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({

    Link:String,
    pref_Link:String,
    user:String

})

const Link = mongoose.models.Link || mongoose.model('Link', LinkSchema);
export default Link;