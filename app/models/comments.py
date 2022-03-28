from .db import db
from .user import User


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(2000), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    answer_id = db.Column(db.Integer, db.ForeignKey('answers.id'), nullable=False)

    user = db.relationship("User", back_populates='comments')
    answer = db.relationship("Answer", back_populates='comments')

    def to_dict(self):
        user = User.query.get(self.user_id)

        return {
            'id': self.id,
            'comment': self.comment,
            'user_id': self.user_id,
            'answer_id': self.answer_id,
            'username': user.username
        }
