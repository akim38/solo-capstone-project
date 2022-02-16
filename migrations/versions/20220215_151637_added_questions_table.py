"""added-questions-table

Revision ID: bfa68efa00d1
Revises: ffdc0a98111c
Create Date: 2022-02-15 15:16:37.160489

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bfa68efa00d1'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('questions',
    sa.Column('id', sa.Integer, nullable=False),
    sa.Column("question", sa.String(500), nullable=False),
    sa.Column("details", sa.String(2000)),
    sa.Column("user_id", sa.Integer, sa.ForeignKey('users.id'), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('question')
    )


def downgrade():
    op.drop_table('questions')
