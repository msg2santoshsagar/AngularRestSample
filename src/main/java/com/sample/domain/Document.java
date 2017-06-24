package com.sample.domain;

public class Document {
	
	private long id;
	private String name;
	private long size;
	private String src;
	private String thumbnailSrc;
	private String type;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getSize() {
		return size;
	}
	public void setSize(long size) {
		this.size = size;
	}
	public String getSrc() {
		return src;
	}
	public void setSrc(String src) {
		this.src = src;
	}
	public String getThumbnailSrc() {
		return thumbnailSrc;
	}
	public void setThumbnailSrc(String thumbnailSrc) {
		this.thumbnailSrc = thumbnailSrc;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "Document [id=" + id + ", name=" + name + ", size=" + size + ", src=" + src + ", thumbnailSrc="
				+ thumbnailSrc + ", type=" + type + "]";
	}
	
	
		
}
