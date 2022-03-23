from flask import Blueprint
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
    username = vote.user.username

    vote_info = vote.to_dict()
    vote_info['username'] = username

    return {'vote': [vote_info]}


#edit vote
@vote_routes.route('/<int:id>/up/', methods=['PUT'])
@login_required
def change_upvote(id):
    vote = Vote.query.get(id)
    vote.upvoted = not vote.upvoted

    answer = vote.answer
    if vote.upvoted is True:
        answer.upvote_count += 1
    else:
        answer.upvote_count -= 1

    print('ANSWERANSWERANSWER??', answer)

