from app.models import db, Answer


def seed_answers():

    answer_01 = Answer(answer='CHLOROPHYLL!!!!', user_id=2, question_id=1, upvote_count=0, downvote_count=1)
    answer_02 = Answer(answer='I believe it is because plants contain a pigment called chlorophyll which helps the plant absorb sun. The chlorophyll absorbs light but reflects green light so it appears green.', user_id=3, question_id=1, upvote_count=1, downvote_count=0)
    answer_03 = Answer(answer='GIVE TREATS!!!', user_id=2, question_id=2, upvote_count=1, downvote_count=0)
    answer_04 = Answer(answer='Playing with your cat, grooming your cat, giving your cat treats are all great ways to bond with your cat!', user_id=3, question_id=2)
    answer_05 = Answer(answer='Who knows...', user_id=1, question_id=5)
    answer_06 = Answer(answer='Hey, your question could use a little more context.. There are many ways to intepret that question and I am not sure which way you are asking...', user_id=3, question_id=5)
    answer_07 = Answer(answer='Win the lottery.', user_id=1, question_id=6)
    answer_08 = Answer(answer='Becoming rich is no easy feat. You would need to save and invest properly.', user_id=2, question_id=6)

    db.session.add(answer_01)
    db.session.add(answer_02)
    db.session.add(answer_03)
    db.session.add(answer_04)
    db.session.add(answer_05)
    db.session.add(answer_06)
    db.session.add(answer_07)
    db.session.add(answer_08)

    db.session.commit()


def undo_answers():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
