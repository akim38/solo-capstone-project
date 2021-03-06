"""changed answers model for vote counts

Revision ID: 910191bac6bb
Revises: 3ae139c63261
Create Date: 2022-03-24 21:39:31.849970

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '910191bac6bb'
down_revision = '3ae139c63261'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('answers', 'downvote_count')
    op.drop_column('answers', 'upvote_count')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('answers', sa.Column('upvote_count', sa.INTEGER(), autoincrement=False, nullable=False))
    op.add_column('answers', sa.Column('downvote_count', sa.INTEGER(), autoincrement=False, nullable=False))
    # ### end Alembic commands ###
