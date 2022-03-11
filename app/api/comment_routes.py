from flask import Blueprint, request
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Answer, Comment
from flask_login import current_user, login_required
from app.forms import CommentForm


comment_routes = Blueprint('comments', __name__)


#get all comments
@comment_routes.route('/')
@login_required
def comments():
    comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in comments]}


#get single comment based on id
@comment_routes.route('/<int:id>/')
@login_required
def comment(id):
    comment = Comment.query.get(id)
    username = comment.user.username

    comment_info = comment.to_dict()
    comment_info['username'] = username
    return {'comments': [comment_info]}


#edit comment
@comment_routes.route('/<int:id>/', methods=['PUT'])
@login_required
def edit_comment(id):
    comment = Comment.query.get(id)
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment.comment = form.data['commment']

        db.session.commit()

        username = comment.user.username
        comment_info = comment.to_dict()
        comment_info['username'] = username

        return comment_info
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


#delete comment
@comment_routes.route('/<int:id>/', methods=['DELETE'])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return {'message': 'Comment deleted.'}


