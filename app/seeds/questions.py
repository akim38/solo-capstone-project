from app.models import db, Question


def seed_questions():

    question_01 = Question(question='Why are plants green?', details='I noticed that most plants are green and would like to know more!', user_id=1)
    question_02 = Question(question='What are ways to bond with my cat?', details='My cat seems to hate me but I just want to be closer to my cat!', user_id=1)
    question_03 = Question(question='What is the best tasting sandwich?', user_id=1)
    question_04 = Question(question='How much is a florida ounce?', details='I see it on bottles all the time! What does a Florida ounce mean?', user_id=2)
    question_05 = Question(question='Where do we come from?', user_id=2)
    question_06 = Question(question='How do I become rich?', user_id=2)

    db.session.add(question_01)
    db.session.add(question_02)
    db.session.add(question_03)
    db.session.add(question_04)
    db.session.add(question_05)
    db.session.add(question_06)

    db.session.commit()


def undo_questions():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
