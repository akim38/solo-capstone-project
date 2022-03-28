from flask import Blueprint, request
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, User, Answer, Vote
from flask_login import current_user, login_required


vote_routes = Blueprint('votes', __name__)

#get votes
@vote_routes.route('/')
@login_required
def votes():
    votes = Vote.query.all()
    return {'votes': [vote.to_dict() for vote in votes]}


#get single vote by id
@vote_routes.route('/<int:id>/')
@login_required
def vote(id):
    vote = Vote.query.get(id)

    return {'vote': [vote.to_dict()]}


#edit vote
@vote_routes.route('/<int:id>/', methods=['PUT'])
@login_required
def change_upvote(id):
    vote = Vote.query.get(id)
    vote.upvoted = not vote.upvoted
    vote.downvoted = not vote.downvoted

    db.session.commit()

    editted_answer = vote.answer

    return {'answers': [editted_answer.to_dict()]}


#delete vote
@vote_routes.route('/<int:id>/', methods=['DELETE'])
@login_required
def delete_vote(id):
    vote = Vote.query.get(id)
    db.session.delete(vote)
    db.session.commit()
    return {'message': 'Vote deleted.'}
