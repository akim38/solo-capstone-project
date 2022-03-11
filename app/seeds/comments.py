from app.models import db, Comment


def seed_comments():

    comment_01 = Comment(comment='What is that?', user_id=1, answer_id=1)
    comment_02 = Comment(comment='What kind of treats?', user_id=3, answer_id=3)
    comment_03 = Comment(comment='REAL ANSWER PLEASE', user_id=2, answer_id=5)
    comment_04 = Comment(comment='YOU KNOW WHAT I MEAN', user_id=2, answer_id=6)
    comment_05 = Comment(comment='THAT SOUNDS HARD', user_id=2, answer_id=8)

    db.session.add(comment_01)
    db.session.add(comment_02)
    db.session.add(comment_03)
    db.session.add(comment_04)
    db.session.add(comment_05)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
