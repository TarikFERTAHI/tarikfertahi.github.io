import { skeleton } from '../../helpers/utils';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ title, subtitle, certificate_link }) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{title}</div>
    <h3 className="font-semibold">{subtitle}</h3>
    <div className="mb-4 font-normal">{certificate_link}</div>
  </li>
);

const Certifications = ({ loading, Certifications }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          title={skeleton({
            width: 'w-5/12',
            height: 'h-4',
          })}
          subtitle={skeleton({
            width: 'w-6/12',
            height: 'h-4',
            className: 'my-1.5',
          })}
          certificate_link={skeleton({ width: 'w-6/12', height: 'h-3' })}
        />
      );
    }

    return array;
  };

  return (
    <>
      {Certifications?.length !== 0 && (
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-70">
                    Certifications
                  </span>
                )}
              </h5>
            </div>
            <div className="text-base-content text-opacity-60">
              <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                {loading ? (
                  renderSkeleton()
                ) : (
                  <Fragment>
                    {Certifications.map((item, index) => (
                      <ListItem
                        key={index}
                        title={item.title}
                        subtitle={item.subtitle}
                        certificate_link={item.certificate_link}
                      />
                    ))}
                  </Fragment>
                )}
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Certifications.propTypes = {
  loading: PropTypes.bool.isRequired,
  Certifications: PropTypes.array.isRequired,
};

ListItem.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  certificate_link: PropTypes.node,
};

export default Certifications;
