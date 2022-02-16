from .db import db


class Questions(db.Model):
    __tablename__ = 'questions'

    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(500), nullable=False, unique=True)
    details = db.Column(db.String(2000))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship("User", back_populates='questions')
    answers = db.relationship("Answers", back_populates='questions')

    def to_dict(self):
        return {
            'id': self.id,
            'question': self.question,
            'details': self.details,
            'user_id': self.user_id
        }


