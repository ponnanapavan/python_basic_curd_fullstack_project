from app import app ,db
from flask import request, jsonify
from models import Friend


@app.route('/api/friends', methods=["GET"])
def get_friends():
    friends=Friend.query.all()
    result= [friend.to_json() for friend in friends]
    return jsonify(result)


@app.route('/api/friends', methods=["POST"])
def create_friend():
    try:
        data=request.json
        required_fields=["name", "role", "description", "gender"]
        for field in required_fields:
            if field not in data:
                return jsonify({"error":f"Missing required field:{field}"}), 400
        
        name=data.get("name")
        description=data.get("description")
        role=data.get("role")
        gender=data.get("gender")
        if(gender == "male"):
            img_url=f"https://avatar.iran.liara.run/public/boy?username={name}"
        elif gender == "female":
            img_url=f"https://avatar.iran.liara.run/public/girl?username={name}"
        else:
            img_url=None
        new_friend=Friend(name=name, role=role, description=description, gender=gender,img_url=img_url)
        #above created a new instance of Friend Class and it will craete a new friend object
        db.session.add(new_friend)
        #in this i added this friend object in database session but not added in databse
        db.session.commit()
        return jsonify({"msg":"Friend created successfully"}),201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}),500
 
 
    
@app.route('/api/friends/<int:id>', methods=["DELETE"])
def delete_friend(id):
    try:
        friend=Friend.query.get(id)
        if friend is None:
            return jsonify({"error":"Friend is not found"}),404
        db.session.delete(friend)
        db.session.commit()
        return jsonify({"msg":"Friend Deleted"}),201
    except Exception as e:
        db.session.rollback() # here i go to previous state
        return jsonify({"error":str(e)}),500

@app.route('/api/friends/<int:id>', methods=["PATCH"])
def update_friend(id):
    try:
        friend=Friend.query.get(id)
        if friend is None:
             return jsonify({"error":"Friend is not found"}),404
        data=request.json
        friend.name=data.get("name", friend.name)
        friend.role=data.get("role", friend.role)
        friend.gender=data.get("gender",friend.gender)
        friend.description=data.get("description", friend.description)
        db.session.commit()
        return jsonify({"msg":"updated"}),200
    except Exception as e:
         db.session.rollback() # here i go to previous state
         return jsonify({"error":str(e)}),500
        
    
            
            