 board = [[{id:0},{id:1},{id:2}],[{id:3},{id:4},{id:5}],[{id:6},{id:7},{id:8}]]

module.exports = {
    getBoard: (req,res) => {
        return res.status(200).send(board)
    }
}