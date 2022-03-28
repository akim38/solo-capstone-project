from app.models import db, Vote


def seed_votes():

    comment_01 = Vote(user_id=1, answer_id=1, upvoted=False, downvoted=True)
    comment_02 = Vote(user_id=1, answer_id=2, upvoted=True, downvoted=False)
    comment_03 = Vote(user_id=1, answer_id=3, upvoted=True, downvoted=False)

    db.session.add(comment_01)
    db.session.add(comment_02)
    db.session.add(comment_03)

    db.session.commit()


def undo_votes():
    db.session.execute('TRUNCATE votes RESTART IDENTITY CASCADE;')
    db.session.commit()
