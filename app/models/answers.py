from .db import db
from .votes import Vote
from .user import User
from flask_login import current_user


class Answer(db.Model):
    __tablename__ = 'answers'

    id = db.Column(db.Integer, primary_key=True)
    answer = db.Column(db.String(2000), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable=False)
    # upvote_count = db.Column(db.Integer, nullable=False, default=0)
    # downvote_count = db.Column(db.Integer, nullable=False, default=0)

    user = db.relationship("User", back_populates='answers')
    question = db.relationship("Question", back_populates='answers')
    comments = db.relationship("Comment", back_populates='answer', cascade="all, delete")
    votes = db.relationship("Vote", back_populates='answer', cascade="all, delete")

    # def update_votes(self):
    #     self.upvote_count = 0
    #     self.downvote_count = 0
    #     for vote in self.votes:
    #         if vote.upvoted == True:
    #             self.upvote_count += 1
    #         if vote.downvoted == True:
    #             self.downvote_count += 1

    def to_dict(self):
        all_upvotes = Vote.query.filter(Vote.answer_id == self.id, Vote.upvoted == True).all()
        upvotes = [upvote.to_dict() for upvote in all_upvotes]

        all_downvotes = Vote.query.filter(Vote.answer_id == self.id, Vote.downvoted == True).all()
        downvotes = [downvote.to_dict() for downvote in all_downvotes]

        user = User.query.get(self.user_id)

        has_upvoted = False
        for vote in self.votes:
            if current_user.id == vote.user_id and vote.upvoted == True:
                has_upvoted = True

        has_downvoted = False
        for vote in self.votes:
            if current_user.id == vote.user_id and vote.downvoted == True:
                has_downvoted = True

        user_vote = -1
        for vote in self.votes:
            if current_user.id == vote.user_id:
                user_vote = vote.id

        return {
            'id': self.id,
            'answer': self.answer,
            'user_id': self.user_id,
            'question_id': self.question_id,
            'upvote_count': len(upvotes),
            'downvote_count': len(downvotes),
            'username': user.username,
            'user_upvoted': has_upvoted,
            'user_downvoted': has_downvoted, 
            'user_vote': user_vote
        }
