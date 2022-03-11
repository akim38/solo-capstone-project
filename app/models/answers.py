from .db import db


class Answer(db.Model):
    __tablename__ = 'answers'

    id = db.Column(db.Integer, primary_key=True)
    answer = db.Column(db.String(2000), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable=False)

    user = db.relationship("User", back_populates='answers')
    question = db.relationship("Question", back_populates='answers')
    comments = db.relationship("Comment", back_populates='comment', cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'answer': self.answer,
            'user_id': self.user_id,
            'question_id': self.question_id
        }
