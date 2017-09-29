# Magic photo gallery

- Built using `react-create-app`
- Static photo gallery rotator

Code idea:

```
<PhotoGallery>
  <PhotoView title="This is a title">
    <Photo src={this.state.src} />
    <Button direction="previous" clickHandle={this.changePhoto} /> <Button direction="next" clickHandle={this.changePhoto} />
  </ PhotoView>
  <ThumbNailView>
    <ThumbNail clickHandle={this.changePhoto} />
    <ThumbNail clickHandle={this.changePhoto} />
  </ ThumbNailView>
</ PhotoGallery>
```