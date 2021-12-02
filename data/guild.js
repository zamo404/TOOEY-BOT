const schema = mongoose.Schema({
    guildID: String,
    ///user:String,
    prefix: { type: String, default: "Bob"},
    
});
module.exports = mongoose.model("Guild", schema)
