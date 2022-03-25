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
    username = vote.user.username

    vote_info = vote.to_dict()
    vote_info['username'] = username

    return {'vote': [vote_info]}

# need to change to make to vote route with request im so dumb dumb dumb
# #post upvote on answer
# @answer_routes.route('/<int:id>/upvote/', methods=['POST'])
# @login_required
# def new_upvote(id):
#     new_vote = Vote(
#         user_id=current_user.id,
#         answer_id=id,
#         upvoted=True,
#         downvoted=False
#     )

#     answer = Answer.query.get(id)
#     answer.upvote_count += 1

#     db.session.add(new_vote)
#     db.session.commit()

#     return answer.to_dict()

# #post downvote on answer
# @answer_routes.route('/<int:id>/downvote/', methods=['POST'])
# @login_required
# def new_downvote(id):
#     new_vote = Vote(
#         user_id=current_user.id,
#         answer_id=id,
#         upvoted=False,
#         downvoted=True
#     )

#     answer = Answer.query.get(id)
#     answer.downvote_count += 1

#     db.session.add(new_vote)
#     db.session.commit()

#     return answer.to_dict()


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

