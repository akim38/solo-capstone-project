from .db import db
from .user import User

class Vote(db.Model):
    __tablename__ = 'votes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    answer_id = db.Column(db.Integer, db.ForeignKey('answers.id'), nullable=False)
    upvoted = db.Column(db.Boolean, nullable=False, default=False)
    downvoted = db.Column(db.Boolean, nullable=False, default=False)

    user = db.relationship("User", back_populates='votes')
    answer = db.relationship("Answer", back_populates='votes')

    def to_dict(self):
        user = User.query.get(self.user_id)

        return {
            'id': self.id,
            'user_id': self.user_id,
            'answer_id': self.answer_id,
            'upvoted': self.upvoted,
            'downvoted': self.downvoted,
            'username': user.username
        }
