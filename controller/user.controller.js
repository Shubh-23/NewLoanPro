const user = require('../service/user.service')

class userData{






    AddUserDetails(req,res){
        const params = req.body

        return user.AddUserDetails(params).then((data)=>{
            
            if((data) != null){
                return res.json({"ErrorCode":200,"message":"Your successfully working","Data":data})
            }else{
                return res.json({"ErrorCode":500,"message":"something went's wroung","Data":{}})
            }
        })
    }
    
    AllCategories(req,res){
        const params = req.body
        console.log(params)

        return user.AllCategories(params).then((data)=>{
            if((data) != null){
                return res.json({"ErrorCode":200,"message":"Your successfully working","Data":data})
            }else{
                return res.json({"ErrorCode":500,"message":"something went's wroung","Data":{}})
            }
        }).catch(()=>{
            return res.json({"ErrorCode":500,"message":"something went's wroung","Data":{}})
        })
    }







    registration(req,res){
        const params = req.body
        return user.registration(params).then((data)=>{
            if((data) != null){
                return res.json({"ErrorCode":200,"message":"Your successfully working","Data":data})
            }else{
                return res.json({"ErrorCode":500,"message":"something went's wroung","Data":{}})
            }
        })
    }
    
    login(req,res){
        const params = req.body
        console.log("5165165",params)

        return user.login(params).then((data)=>{
            if((data) != null){
                return res.json({"ErrorCode":200,"message":"Your successfully working","Data":data})
            }else{
                return res.json({"ErrorCode":500,"message":"something went's wroung","Data":{}})
            }
        }).catch(()=>{
            return res.json({"ErrorCode":500,"message":"something went's wroung","Data":{}})
        })
    }

    SubmitAllDetails(req,res){
        
        const params = req.body.data
        const userId = req.body.userId
        return user.SubmitAllDetails(params,userId).then((data)=>{
            if((data) != null){
                return res.json({"ErrorCode":200,"message":"Your successfully working","Data":data})
            }else{
                return res.json({"ErrorCode":500,"message":"something went's wroung","Data":{}})
            }
        })

    }
    getAllUserDetails(req,res){
        return user.getAllUserDetails().then((data)=>{
            if((data) != null){
                return res.json({"ErrorCode":200,"message":"Your successfully working","Data":data})
            }else{
                return res.json({"ErrorCode":500,"message":"something went's wroung","Data":{}})
            }
        })

    }

    createSongList(req,res){
        let data = req.body
        return user.createSongList(data).then((data)=>{
            if((data) != null){
                return res.json({"ErrorCode":200,"message":"Your successfully working","Data":data})
            }else{
                return res.json({"ErrorCode":500,"message":"something went's wroung","Data":{}})
            }
        })

    }

    getAllSongList(req,res){
        return user.getAllSongList().then((data)=>{
            if((data) != null){
                return res.json({"ErrorCode":200,"message":"Your successfully working","Data":data})
            }else{
                return res.json({"ErrorCode":500,"message":"something went's wroung","Data":{}})
            }
        })

    }

    
}

module.exports = new userData