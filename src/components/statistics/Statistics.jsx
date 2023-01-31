import React from 'react';
import PropTypes from 'prop-types';
import css from './statistics.module.scss';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function Statistics({ stats, title }) {
  const statItems = stats.map(({ id, label, percentage }) => {
    const styleBcgColor = {
      backgroundColor: getRandomColor(),
    };
    return (
      <li className={css.item} style={styleBcgColor} key={id}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}</span>
      </li>
    );
  });

  return (
    <>
      <section className={css.statistics}>
        {title ? <h2 className={css.title}>{title}</h2> : null}

        <ul className={css.stat_list}>{statItems}</ul>
      </section>
    </>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
