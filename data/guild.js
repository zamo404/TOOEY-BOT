const schema = mongoose.Schema({
    guildID: String,
    ///user:String,
    prefix: { type: String, default: "T"},
    
});
module.exports = mongoose.model("Guild", schema)
