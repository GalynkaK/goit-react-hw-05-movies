import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import css from './Paginator.module.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Paginator({ totalPages, setSearchParams, params, currentPage }) {
  const handlePageClick = (e) => {
    setSearchParams({ ...params, page: e.selected + 1 });
  };

  return (
    <>
      <div className="container">
        <ReactPaginate
          breakLabel="..."
          previousLabel={<IoIosArrowBack />}
          nextLabel={<IoIosArrowForward />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          marginPagesDisplayed={2}
          pageCount={totalPages - 1}
          renderOnZeroPageCount={null}
          forcePage={currentPage}
          containerClassName={css.container}
          activeClassName={css.selected}
          pageClassName={css['pagination-button']}
          breakClassName={css.break}
          previousClassName={css.previous}
          nextClassName={css.next}
          disabledClassName={css.disabled}
        />
      </div>
    </>
  );
}

Paginator.propTypes = {
  totalPages: PropTypes.number.isRequired,
  setSearchParams: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Paginator;