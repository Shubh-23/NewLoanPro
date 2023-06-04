const userData = require('../model/user.model')
const userDetails = require('../model/user_details.model')
const songList = require('../model/song_list')

class usersData{
    registration(params){
        console.log(params);
        const data = {
            'name':params.name,
            'email':params.email,
            'password':params.password
        }
        var user = new userData(data);
        console.log(user);
        return user.save(null).tap(function(model){
            return model;
        }).catch(function(err){
            console.log("err--",err);
            return err;
        })
    }
    

    login(params){
     console.log(params);
        return userData.forge().query((qb)=>{
            qb.where({'email':params.email})
            qb.andWhere({'password':params.password})
        }).fetch().then(function(data){
            console.log(data);
            return data
        }).catch((error)=>{
            return 
        })
    }
   
    SubmitAllDetails(params,userId){
        const data = {
            'user_id':userId,
            'occupation':params.occupation,
            'income':params.Income,
            'pan':params.pan,
            'adharcard':params.AdharCard,
            'address':params.address
        }
        var userDetail = new userDetails(data);
        return userDetail.save(null).tap(function(model){
            return model;
        }).catch(function(err){
            console.log("err--",err);
            return err;
        })
    }

    getAllUserDetails(){
        return userData.forge().query(function(qb){
        }).fetchAll().then(function(data){
            return data
        }).catch(function(err){
            console.log("err--",err);
            return err;
        })
    }


    createSongList(params,userId){
        const data = {
            'songName':params.songName,
            'artiest':params.artiest,
            'songUrl':params.songUrl,
        }
        console.log(data);
        var userDetail = new songList(data);
        return userDetail.save(null).tap(function(model){
            return model;
        }).catch(function(err){
            console.log("err--",err);
            return err;
        })
    }


    getAllSongList(){
        return songList.forge().query(function(qb){
        }).fetchAll().then(function(data){
            // console.log(data);
            return data
        }).catch(function(err){
            console.log("err--",err);
            return err;
        })
    }
    
    
}

module.exports = new usersData