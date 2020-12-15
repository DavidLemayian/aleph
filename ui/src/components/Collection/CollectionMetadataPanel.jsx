import React, { PureComponent } from 'react';
import { Summary } from 'components/common';
import CollectionInfo from 'components/Collection/CollectionInfo';
import CollectionStatus from 'components/Collection/CollectionStatus';
import CollectionReference from 'components/Collection/CollectionReference';

import './CollectionMetadataPanel.scss';

class CollectionMetadataPanel extends PureComponent {
  render() {
    const { collection } = this.props;
    if (!collection) {
      return null;
    }

    return (
      <div className="CollectionMetadataPanel">
        <CollectionStatus collection={collection} showCancel={collection.writeable} className="CollectionMetadataPanel__item" />
        {collection.summary && (
          <div className="CollectionMetadataPanel__item">
            <Summary text={collection.summary} />
          </div>
        )}
        <div className="CollectionMetadataPanel__item">
          <CollectionInfo collection={collection} />
        </div>
        <div className="CollectionMetadataPanel__item mobile-hide">
          <CollectionReference collection={collection} />
        </div>
      </div>
    );
  }
}

export default CollectionMetadataPanel;
