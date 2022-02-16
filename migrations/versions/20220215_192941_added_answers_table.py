"""added-answers-table

Revision ID: 13ffa838b87e
Revises: bfa68efa00d1
Create Date: 2022-02-15 19:29:41.027408

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '13ffa838b87e'
down_revision = 'bfa68efa00d1'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('answers',
    sa.Column('id', sa.Integer, nullable=False),
    sa.Column("answer", sa.String(2000), nullable=False),
    sa.Column("user_id", sa.Integer, sa.ForeignKey('users.id'), nullable=False),
    sa.Column("question_id", sa.Integer, sa.ForeignKey('questions.id'), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    )


def downgrade():
    op.drop_table('answers')
